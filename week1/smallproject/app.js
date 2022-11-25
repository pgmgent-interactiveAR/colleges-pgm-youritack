const app ={
        init(){
            this.registerComponents();
            this.registerEventListerners();
        },
        registerComponents(){
           
            
            this.$scale=document.querySelector('#scale');
            this.$walk=document.querySelector('#inaWalk');
            this.$idle=document.querySelector('#inaIdle');
        },
        registerEventListerners(){
            this.$walk.addEventListener("click",this.inaWalk,false);
            this.$idle.addEventListener("click",this.inaIdle,false);
            this.$scale.addEventListener("onchange",this.inaScale(this.$scale.value),false);
            

        },
        inaWalk(){
            document.getElementById('inaEntity').setAttribute('animation-mixer',"clip:paradewalk; loop:infinite;")
        },
        inaIdle(){
            document.getElementById('inaEntity').setAttribute('animation-mixer',"clip:idle; loop:infinite;")
        },
        inaScale(scaling){
            console.log(scaling)
            document.getElementById('inaEntity').setAttribute('scale', "1 1 1")
        },
    

}
app.init();