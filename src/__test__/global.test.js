const text = "hola mundo";
const fruits = ['manzana', 'melon', 'banana'];

test('Debe contener un texto', ()=>{
    expect(text).toMatch(/mundo/)
})

test('Tenemos una banana', () => {
    expect(fruits).toContain('banana')
})
test('mayor que', () => {
    expect(10).toBeGreaterThan(9)
})

test('Verdadero', () => {
    expect(true).toBeTruthy()
})

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}

test('Probar un callback', ()=>{
    reverseString('hola', (str)=>{
        expect(str).toBe('aloh')
    })
})

const reverseString2 = (str) => {
    return new Promise((resolve, reject)=>{
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    })
}
test('Probar una promesa', ()=>{
    return reverseString2('Hola').then(string => {
        expect(string).toBe('aloH')
    })
})

test('Probar una async/wait', async ()=>{
    const string = await reverseString2('Hola')
    expect(string).toBe('aloH')
})

// afterEach(()=> console.log('Despues de cada prueba'))
// afterAll(()=> console.log('Despues de todas las pruebas'))

// beforeEach(()=> console.log('Antes de cada prueba'))
// beforeAll(()=> console.log('Antes de todas las pruebas'))