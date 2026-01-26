import  desc ,{descrease,increase,addToCart,remove} from '@/store/cartSlice';

it("diminuindo um item",()=>{
    const state ={
        items:[{id:1,name:"teste",qtd:2,description:"teste",price:5}]
    }
const newState = desc(state, descrease(1));
expect(newState.items[0].qtd).toBe(1);
})

it("aumentando um item",()=>{
    const state={
        items:[{id:4,name:"teste",qtd:8, description:"teste",price:8}]
    }
    const newState = desc(state, increase(4));
    expect(newState.items[0].qtd).toBe(9)
})
it("excluindo um item",()=>{
    const state={
        items:[{id:4,name:"teste",qtd:1, description:"teste",price:8}]
    }
    const newState = desc(state, remove(4));
    expect(newState.items.length).toBe(0)
})
it("adicionando um item",()=>{
    
    const initialState = {
        items: [],
    };
    const item={
        items:{id:4,name:"teste",qtd:8, description:"teste",price:8}
    }
    const newState = desc(initialState, addToCart(item));
    expect(newState.items.length).toBe(1)
})




