<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Tasischi Oynasi
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered behavior="mobile">
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-expansion-item v-model="admins" icon="supervisor_account" label="Adminlar">
            <q-card class="my-item">
              <q-item clickable v-ripple id="bosh" @click="func_bosh">
                <q-item-section avatar>
                  <q-icon name="eva-people-outline" />
                </q-item-section>

                <q-item-section>
                  Adminlar
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple to="/add_admin">
                <q-item-section avatar>
                  <q-icon name="person_add" />
                </q-item-section>

                <q-item-section>
                  Adminlar qo'shish
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple to="/admin_davomat">
                <q-item-section avatar>
                  <q-icon name="eva-calendar-outline" />
                </q-item-section>

                <q-item-section>
                  Adminlar davomati
                </q-item-section>
              </q-item>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-item clickable v-ripple to="/uqituvchilar">
            <q-item-section avatar>
              <q-icon name="group" />
            </q-item-section>

            <q-item-section>
              O'qituvchilar
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/oquvchilar">
            <q-item-section avatar>
              <q-icon name="eva-people-outline" />
            </q-item-section>

            <q-item-section>
              O'quvchilar
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/moliya">
            <q-item-section avatar>
              <q-icon name="monetization_on" />
            </q-item-section>

            <q-item-section>
              Moliya
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/davomat">
            <q-item-section avatar>
              <q-icon name="calendar_month" />
            </q-item-section>

            <q-item-section>
              Davomat
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Tasischi</div>
          <div>Ism Familiya</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  data() {
    return {
      admins: false,
      "categories": [{ title: "Admin qo'shish" }, { title: "Adminlar" }, { title: "Davomat" }]
    }
  },
  methods: {
    my_expansion_item(arg) {
      if (this.arg) {
        this.arg = false
      } else {
        this.arg = true
      }
    },
    func_bosh() {
      let my_item = document.getElementById("bosh")
      my_item.classList.add("q-router-link--exact-active")
      my_item.classList.add("q-router-link--active")
      this.$router.push("/")
    }
  },
  watch: {
    $route(to, from) {
      let my_item = document.getElementById("bosh")
      if (to.name == "Bosh sahifa") {
        my_item.classList.add("q-router-link--exact-active")
        my_item.classList.add("q-router-link--active")
      } else {
        my_item.classList.remove("q-router-link--exact-active")
        my_item.classList.remove("q-router-link--active")
      }
      console.log(to);
    }
  },
  mounted(){
    let my_item = document.getElementById("bosh")
    if (this.$route.name == "Bosh sahifa") {
      my_item.classList.add("q-router-link--exact-active")
      my_item.classList.add("q-router-link--active")
    } else {
      my_item.classList.remove("q-router-link--exact-active")
      my_item.classList.remove("q-router-link--active")
    }
  }
})
</script>
<style>
.my-item {
  margin-left: 15px;
}
</style>