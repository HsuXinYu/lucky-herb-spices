import{L as o}from"./index-Z2iVc0QE.js";import{a as s}from"./axios-G2rPRu76.js";const l=o("cartStore",{state:()=>({cartList:[],total:0,final_total:0}),actions:{getCart(){s.get("https://vue3-course-api.hexschool.io/v2/api/lucky_herb_spices/cart").then(t=>{this.cartList=t.data.data.carts,this.total=t.data.data.total,this.final_total=t.data.data.final_total}).catch(()=>{})},addToCart(a,t=1){const e={product_id:a,qty:t};s.post("https://vue3-course-api.hexschool.io/v2/api/lucky_herb_spices/cart",{data:e}).then(r=>{alert(r.data.message),this.getCart()}).catch(()=>{})},removeFromCart(a){if(a==="all")s.delete("https://vue3-course-api.hexschool.io/v2/api/lucky_herb_spices/carts").then(e=>{alert(e.data.message),this.getCart()}).catch(()=>{});else{const t=`https://vue3-course-api.hexschool.io/v2/api/lucky_herb_spices/cart/${a}`;s.delete(t).then(e=>{alert(e.data.message),this.getCart()}).catch(()=>{})}},updateCart(a){const t={product_id:a.product.id,qty:a.qty},e=`https://vue3-course-api.hexschool.io/v2/api/lucky_herb_spices/cart/${a.id}`;s.put(e,{data:t}).then(c=>{alert(c.data.message),this.getCart()}).catch(()=>{})}}});export{l as c};
