<template>
    <div class="q-pa-md example-row-horizontal-alignment">
        <div class="row justify-center">
            <div class="col-9">
                <q-list bordered>
                <q-item-label header>Adminlar</q-item-label>  
                    <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>
                    <q-item-section avatar>
                        <q-avatar>
                        <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
                        </q-avatar>
                    </q-item-section>
            
                    <q-item-section>
                        <q-item-label>{{ contact.name }}</q-item-label>
                        <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
                    </q-item-section>
            
                    <q-item-section top side>
                        <div class="text-grey-8 q-gutter-xs">
                            <q-btn size="12px" class="gt-xs text-primary" flat dense round icon="eva-eye-outline" />
                            <q-btn class="gt-xs text-positive" size="12px" flat dense round icon="eva-edit-2-outline" />
                            <q-btn class="gt-xs text-negative" size="12px" flat dense round icon="eva-trash-2-outline" />
                        </div>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
    </div>
  </template>
  <script>
  
  const offline = [ 
    {
        id: 5,
        name: 'Brunhilde Panswick',
        email: 'bpanswick4@csmonitor.com',
        avatar: 'avatar2.jpg'
    }, 
    {
        id: 6,
        name: 'Winfield Stapforth',
        email: 'wstapforth5@pcworld.com',
        avatar: 'avatar6.jpg'
    } 
    ]
  
  export default {
    setup () {
      return {
        offline
      }
    }
  }
  </script>
<style>
</style>