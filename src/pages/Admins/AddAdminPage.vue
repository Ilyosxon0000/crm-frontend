<template>
    <div class="q-pa-md example-row-horizontal-alignment">
        <div class="row justify-center">
            <div class="col-md-4 col-sm-5">
                <q-card>
                    <div class="q-pa-md">
                        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md" bordered>
                            <div class="row justify-center">
                                <q-btn round class="q-mb-sm text-center" @click="file_method">
                                    <q-avatar class="custom-avatar" :style="{ width: avatarSize, height: avatarSize }">
                                        <q-icon name="eva-image" v-show="!user_image" />
                                        <img :src="user_image" v-show="user_image">
                                    </q-avatar>
                                </q-btn>
                                <q-file class="hidden" ref="myFileInput" accept=".jpg,.png, image/*" v-model="image" />
                            </div>

                            <q-input outlined v-model="input_number" type="number" prefix="+998">
                            </q-input>

                            <q-input v-model="password" filled label="Parol:" :type="isPwd ? 'password' : 'text'">
                                <template v-slot:append>
                                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                        @click="isPwd = !isPwd" />
                                </template>
                            </q-input>

                            <q-input filled v-model="first_name" label="Ismingiz:" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />

                            <q-input filled v-model="last_name" label="Familiyangiz:" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please type something']" />

                            <q-select 
                                outlined 
                                v-model="types" 
                                :options="types_item" 
                                label="Admin Turi"
                                :option-label="opt => Object(opt) === opt && 'title' in opt ? opt.title : ''"
                            />
                            <div v-if="types.id==4">
                                <q-toggle
                                    v-for="item in permissions_items" :key="item"
                                    :label="item.title"
                                    v-model="permissions"
                                    :val="item"
                                />
                            </div>
                            <div>
                                <q-btn label="Submit" type="submit" color="primary" />
                                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                            </div>
                        </q-form>
                    </div>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            image: null,
            user_image: "",
            phone: "+998",
            password: "",
            input_number: null,
            first_name: null,
            last_name: null,
            isPwd: true,
            avatarSize: "100px",
            types_item: [
                {
                    "id": 1,
                    "title": "Tasischi",
                    "slug": "tasischi"
                },
                {
                    "id": 2,
                    "title": "Manager",
                    "slug": "manager"
                },
                {
                    "id": 3,
                    "title": "Finance",
                    "slug": "finance"
                },
                {
                    "id": 4,
                    "title": "Admin",
                    "slug": "admin"
                }
            ],
            types: "",
            permissions:[],
            permissions_items:[
                {
                    "id": 1,
                    "title": "Davomat",
                    "slug": "davomat"
                },
                {
                    "id": 2,
                    "title": "Sinf yaratish",
                    "slug": "sinf-yaratish"
                },
                {
                    "id": 3,
                    "title": "Dars jadvali bilan ishlash",
                    "slug": "dars-jadvali-bilan-ishlash"
                },
                {
                    "id": 4,
                    "title": "O’quvchini ma’lumotlarini tahrirlash",
                    "slug": "oquvchini-malumotlarini-tahrirlash"
                },
                {
                    "id": 5,
                    "title": "O’quvchi to’lovini ko’rish",
                    "slug": "oquvchi-tolovini-korish"
                },
                {
                    "id": 6,
                    "title": "O’qituvchi ma’lumotlarini tahrirlash",
                    "slug": "oqituvchi-malumotlarini-tahrirlash"
                }
            ]
        }
    },
    methods: {
        onSubmit() {
            this.phone += this.input_number
            this.$q.notify({
                color: 'green-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: `${this.phone}Submitted`
            })
        },

        onReset() {
            this.phone = "+998",
                this.input_number = null,
                this.first_name = null
            this.last_name = null
        },
        file_method() {
            this.$refs.myFileInput.pickFiles();
        },
        handleFileChange() {
            console.log("ishladi");
            if (this.selectedFile) {
                this.imagePreview = URL.createObjectURL(this.selectedFile);
            } else {
                this.imagePreview = null;
            }
        }
    },
    watch: {
        image(file) {
            this.user_image = URL.createObjectURL(file)
        },
    },
}
</script>
<style scoped>
.custom-avatar {
  min-width: 100px; /* Set your desired minimum width */
  min-height: 100px; /* Set your desired minimum height */
}
</style>