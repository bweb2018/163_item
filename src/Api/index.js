
import ajax from './ajax'
const BS = '/wangyi'
export const reqHomeData = () => ajax('/mock/home')
export const reqWangData = () => ajax('/mock/wang')
export const reqCategory = () => ajax('/category/category')
export const reqSearchData = (searchInfo) => ajax(BS+`http://m.you.163.com/xhr/search/searchAutoComplete.json?csrf_token=29c2d6669c619d172a33deb5c6c9a837&keywordPrefix=${searchInfo}`)
