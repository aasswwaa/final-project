<template>
    <div class="text main homebg">
        <div v-if="isAuthentificated">
            <div>Welcome <b>{{ username }}</b>.</div>
            <center><button class="button" @click="logout">Logout</button></center>
        </div>
        <div v-else>
            <div>
                Welcome.
                <div>

                </div>
            </div>
            <div>
            <label>Enter your nickname</label>
            </div>
            <input v-model="username"/>
            <div class="butcord">
            <center><button class="button" @click="login">Save</button></center>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data(){
        return{
            isAuthentificated: false,
            username: ''
        }
    },
    methods: {
        login(){
            if(this.username !== ''){
                this.isAuthentificated = true
                localStorage.setItem('isAuthentificated', true)
                localStorage.setItem('username', this.username)

                this.$router.push({
                    name: 'Chat',
                    query: {username: this.username}
                })
            } else {
                alert('WRITE NICKNAME!!!!!!!!!!!!!!')
            }
        },
        logout(){
            this.isAuthentificated = false,
            this.username = '',
            localStorage.removeItem('isAuthentificated')
            localStorage.removeItem('username')
        }
    },
    created(){
        if(localStorage.getItem('isAuthentificated')) {
            this.isAuthentificated = true
            this.username = localStorage.getItem('username')
        }
    }
}
</script>
<style>
.homebg{
    width: 100%;
    height: 93vh;
    background: #33CCCC; /* Fallback */
    animation: color 9s infinite linear;
        }

        @keyframes color {
            0%   { background: #333; }
            20%  { background: #474747; }
            40%  { background: #646464; }
            60%  { background: #6d6d6d; }
            80%  { background: #535353; }
            100% { background: #333; }
          }
.button{
    cursor: pointer;
    outline: 0;
    display: inline-block;
    font-weight: 300;
    line-height: 1.5;
    text-align: center;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #bbbbbb;
    border-color: #272727;}
.button:hover {
        color: #fff;
        background-color: #7E7E7E;
        border-color: #7E7E7E;
    }
.butcord{
    padding-top: 5%;
}
</style>