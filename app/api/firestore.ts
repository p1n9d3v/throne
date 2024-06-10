import {firestore} from './config'
import {query,collection as fCollection,doc as fDoc,addDoc as fAddDoc, getDocs,orderBy,limit, getCountFromServer, startAfter,endBefore, limitToLast, Query} from 'firebase/firestore'




export const collection =  (paths:string[]) =>  fCollection(firestore, paths[0] as string, ...paths.slice(1))
export const doc = (paths:string[]) => fDoc(firestore, paths.shift() as string, ...paths) 

export const addDoc = async (paths:string[], data:any)  => await fAddDoc(collection(paths), data)

export const queryPagination = async ({
	type,
	pageSize,
	lastVisible,
	firstVisible,
	orderByField,
	orderType,
	paths
}: {
		type: 'first' | 'prev' | 'next' |'last'
		pageSize: number,
		orderByField: string
		orderType: 'asc' | 'desc',
		lastVisible?: Document
		firstVisible?:Document 
		paths: string[]
	}) => {


	const result:any[] = [];

	const colRef = collection(paths)

	let queryRef:Query | null = null;

	switch(type) {
		case 'first' : {
			queryRef = query(colRef,orderBy(orderByField,orderType),limit(pageSize))
			break;
		}
		case 'prev'	 : {
			queryRef = query(colRef,orderBy(orderByField,orderType),limitToLast(pageSize), endBefore(firstVisible))
			break;
		} 
		case 'next' : {
			queryRef = query(colRef,orderBy(orderByField,orderType),limit(pageSize), startAfter(lastVisible))
			break;
		}
		case 'last': {
			queryRef = query(colRef,orderBy(orderByField,orderType),limitToLast(pageSize))
			break;
		}
	}

	if(!queryRef)  throw new Error('[queryPagination] - are not assigned queryRef')

	const snapshot= await getDocs(queryRef)
	

	snapshot.forEach((doc) => {
		result.push({
			id: doc.id,
			...doc.data()
		})
	})


	const totalCount = ( await getCountFromServer(colRef) ).data().count

	return {
		data: result,
		totalCount,
		lastVisible :  snapshot.docs[snapshot.docs.length-1],
		firstVisible: snapshot.docs[0]
	} 
}
