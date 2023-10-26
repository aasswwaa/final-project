<template>
    <div class="homebg text" v-if="username">
        <div class="msginput">
        <input v-model="newMessage" placeholder="Write something">
        <button @click="sendMessage">Send</button>
        <button @click="delMessage">Delete</button>
        </div>
        <div class="chat">
            <h2 class="main">Chat</h2>
            <div class="text main" v-for="message in messages" :key='message.id'>
                {{ message.user }}: {{ message.text }}
            </div>
            <div v-show="emptyMsg" class="empty main">*zzz*</div>
        </div>
    </div>

    <div class="homebg" v-else>
        <div class="text main">go out & write nickname!</div>
        <div class="text main">
            <p><router-link :to="{name: 'Home'}"><a class="text">Okay...</a></router-link></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatPage',
    data(){
        return{
            messages: [],
            newMessage: '',
            emptyMsg: true,
            username: localStorage.getItem('username')
        }
    },
    computed(){
        localStorage.getItem('username', this.$route.query.username)
    },
    methods: {
        sendMessage(){
            if(this.newMessage !== ''){
                this.emptyMsg = false
                this.messages.push({id: new Date().getTime(), text: this.newMessage, user: this.username})
                this.saveChatRecord(),
                this.newMessage = ''
                console.log('message')
            } else {
                alert('WRITE MESSAGE!!!!!!!!!!!!!!!!!!')
            }
        },
        saveChatRecord(){
            const records = this.messages
            localStorage.setItem('message_${this.username}', JSON.stringify(records))
        },
        loadChatRecords(){
            const records = JSON.parse(localStorage.getItem('message_${this.username}'))
            if(records){
                this.messages = records
                this.emptyMsg = false
            }
        },
        delMessage(){
            this.messages = []
            localStorage.removeItem('messages_$(this.username)', JSON.stringify(this.messages))
            this.emptyMsg = true
        }
    },
    created(){
        this.loadChatRecords()
    }
}
</script>
<style>
.chatbg{
    background-color: grey;
    width: 100%;
    height: 100vh;
}
</style>