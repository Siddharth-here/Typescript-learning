//generics

function getResponse<T>(data: T[]) { //generic type
    return {
        success: true,
        status: 200,
        data,

    }
}
const numbers = getResponse([1, 2, 3]).data
const strings = getResponse(["A", "B", "C"]).data

//Generic type

type ApiResponse<T> = {
    data: T,
    isError: boolean,

}
type UserApiResponse = ApiResponse<{ name: string, age: number }>
type BlogApiResponse = ApiResponse<{ title: string, views: number }>



//Generic Interface
interface User {
    username: string
}
interface Product {
    title: string
}

interface Result<T> {
    data: T,
    errorMsg: string | null,
}

function fetch<T>(url: string): Result<T>{
    return {data: null, errorMsg:null}
}