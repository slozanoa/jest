const randomStrings = require("../index");



describe('Probar funcionalidades de random string',  ()=> {
    test("It should return a string", () => {
        expect(typeof randomStrings()).toBe("string");
      });
      test('comprobar que no existe una ciudad', () => {
        expect(randomStrings()).not.toMatch(/Cordoba/)
    })
});