import { test, expect } from "bun:test";


test('teste de conexão com a api da parte de produto', async () => {
    const result = await fetch('http://localhost:3000/product');
    const data = await result.json();

    expect(data).toBeArray()
})