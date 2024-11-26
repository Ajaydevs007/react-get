import commonAPI from "./Commonapi";



//get toheadlines

export const handleheadlines = async () => {
    return await commonAPI('GET', 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b80cf336adbb4ce9b361fbbffb7467b0', "")
}



//get bussiness

export const handlebussiness = async () => {
    return await commonAPI('GET', 'https://newsapi.org/v2/everything?q=tesla&from=2024-10-26&sortBy=publishedAt&apiKey=b80cf336adbb4ce9b361fbbffb7467b0', "")
}


//getother

export const handleothers = async () => {
    return await commonAPI('GET', 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b80cf336adbb4ce9b361fbbffb7467b0', "")
}



//get sports

export const handlesports = async () => {
    return await commonAPI('GET', 'https://newsdata.io/api/1/news?apikey=pub_60452be1a82df4f47473a87ab41ea2cfedaa2&q=football', "")
}

//getpol

export const handlepol = async () => {
    return await commonAPI('GET', 'https://newsdata.io/api/1/news?apikey=pub_60452be1a82df4f47473a87ab41ea2cfedaa2&q=poltics', "")
}