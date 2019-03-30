import Mock from 'mockjs'
import category from './category.json'
import categoryList from './categoryList.json'
import home from './homeData.json'

//注册模拟接口
Mock.mock('/mock/home',{code: 0 ,data: home})
Mock.mock('/category/category',{code: 0 ,data: category})
Mock.mock('/category/categoryList',{code: 0 ,data: categoryList})
