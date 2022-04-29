const app = new Vue(
    {
        el: "#app",
        data: {
            data: "",
        },
        mounted(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response =>{
                console.log(this);
                this.data = response.data;
            })
        }

        
    }
)