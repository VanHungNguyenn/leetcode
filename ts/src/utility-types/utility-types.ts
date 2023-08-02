// ? partial, pick, Omit, Readonly, Record, Exclude, Extract, NonNullAble, Parameters, ReturnType,...
// * partial
interface UserUtility {
	name: string
	age: number
	email: string
}

function createUser(user: Partial<UserUtility>) {
	return {
		name: 'Join',
		age: 30,
		email: 'join@example.com',
		...user,
	}
}

const newUser = createUser({ name: 'Jane' })
console.log(newUser)

// Pick
type UserPreview = Pick<UserUtility, 'name' | 'age'>

const userPreview: UserPreview = {
	name: 'Dac',
	age: 27,
}

// * Omit
interface Todo {
	title: string
	description: string
	completed: boolean
	createdAt: number
}

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
	title: 'Clean room',
	completed: false,
	createdAt: 1615544252770,
}

// * Readonly
const todoReadonly: Readonly<TodoPreview> = {
	title: 'Delete user',
	completed: false,
	createdAt: 1615544252770,
}

// // todoReadonly.completed = true => error because prop readonly

// * Record
interface CatInfo {
	age: number
	breed: string
}

type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
	miffy: { age: 10, breed: 'Persian' },
	boris: { age: 5, breed: 'Maine Coon' },
	mordred: { age: 16, breed: 'British Shorthair' },
}

// * Exclude
type T0 = Exclude<'a' | 'b' | 'c', 'a'>
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
type T2 = Exclude<string | number | (() => void), Function>

// * Extract
type T3 = Extract<'a' | 'b' | 'c', 'a' | 'f'>

// * Nonnullalbe
type T4 = NonNullable<string | number | undefined>
type T5 = NonNullable<string[] | null | undefined>
