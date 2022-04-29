const app = new Vue(
    {
        el: "#app",
        data: {
            emails: [],
        },
        mounted(){
            for(let i =0; i<10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response =>{
                console.log(this);
                this.emails.push(response.data.response)
               // console.log(this.emails);
            })

            }
            
            
        }

        
    }
)