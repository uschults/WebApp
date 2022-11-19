<template>
    <div>
        <form @submit.prevent="validateForm">
            <h2>Create an account</h2>
            <div class="row">
                <label for="email">Email</label>
                <input type="email" required v-model="email">
            </div>
            <div class="row">
                <label for="password">Password</label>
                <input type="password" required v-model="password">
            </div>
            <div v-if="validatePassword" class="error">{{ validatePassword }}</div>
            <div v-if="successPassword" class="success">{{ successPassword }}</div>
            <div class="submit">
                <button>Sign up </button>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    name: "SignupForm",
    data: function () {
        return {
            email: '',
            password: '',
            validatePassword: '',
            successPassword: '',
        }
    },
    methods: {
        validateForm() {
            /* Early return structure */
            if (this.password.length < 8 || this.password > 15) {
                this.successPassword = '';
                this.validatePassword = 'password must be between 8-15 chars';
                return;
            }

            if(!/^[A-Z]/.test(this.password)) {
                this.successPassword = '';
                this.validatePassword = 'password has to start with an uppercase letter';
                return;
            }

            if(!/(?=(.*[a-z]){2})/.test(this.password)) {
                this.successPassword = '';
                this.validatePassword = 'password has to contain at least two lowercase letters';
                return;
            }

            if(!/(?=.*[0-9])/.test(this.password)) {
                this.successPassword = '';
                this.validatePassword = 'password has to contain at least one digit';
                return;
            }

            if(!/_/.test(this.password)) {
                this.successPassword = '';
                this.validatePassword = 'password should include the character _';
                return;
            }
            
            console.log(this.email);
            console.log(this.password);

            this.validatePassword = '';
            this.successPassword = 'success';
            return;
        }
    }
}
</script>


<style>
.row {
    margin: 5px;
}

form {
    max-width: 300px;
    margin: 30px auto;
    background: black;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: lightgreen;
    display: inline-block;
    font-weight: bold;
    margin-right: 20px;
    min-width: 80px;
}

input {
    padding: 10px;
    width: 50%;
}

button {
    font-size: x-large;
    color: lightgreen;
    background-color: black;
    transition-duration: 0.4s;
    border: thin solid lightgreen;
    border-radius: 20px;
    padding: 10px 20px;
    margin-top: 20px;
}

button:hover {
    background-color: rgb(83, 83, 83);
    cursor: pointer;
}

.submit {
    text-align: center;
}

h2 {
    color: lightgreen;
    text-align: center;
}

.error {
    color: red;
    font-weight: bold;
    font-size: small;
    margin-top: 15px;
    text-align: center;
    text-transform: uppercase;
}

.success {
    color: green;
    font-weight: bold;
    font-size: small;
    margin-top: 15px;
    text-align: center;
    text-transform: uppercase;
}

</style>