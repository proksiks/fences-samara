<template>
  <div class="py-20">
    <div class="bg-gray-105">
      <div class="container">
        <div class="flex items-center justify-between md:justify-start pt-7">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="cursor-pointer md:flex-none flex-1 pt-3 md:px-10 px-4 md:pb-10 pb-8 md:text-[1.5rem] font-medium transition-colors duration-300"
            :class="{ 'bg-white': activeTab === tab.id }"
            @click="setActiveTab(tab.id)"
          >
            {{ tab.title }}
          </button>
        </div>
      </div>
   </div>
    <div class="container">
      <div
        v-for="tab in tabs"
        v-show="activeTab === tab.id"
        :key="tab.id"
        :class="{'md:pt-18 pt-14': tab.id === tabs[0]?.id, 'pt-18 min-h-[500px]': tab.id !== tabs[0]?.id}"
      >
        <h2 class="text-[2rem] md:text-[3.125rem] font-medium text-green-505">{{ tab.title }}</h2>
  
        <p class="md:text-lg text-gray-205 md:mt-6 mt-3" v-html="tab.description"></p>
        <p class="md:text-lg text-gray-205 md:mt-6 mt-3" v-html="tab.subDescription"></p>
        
        <p class="md:text-lg font-medium my-6" v-if="tab.processTitle">{{ tab.processTitle }}</p>
        
        <ol class="list-decimal list-inside" v-if="tab.items && tab.items.length > 0">
          <li
            class="md:text-lg mt-2"
            v-for="(item, index) in tab.items"
            :key="index"
          >
            <span class="text-gray-205 font-medium" v-if="item.title">{{ item.title }}</span>
            {{ item.description }}
          </li>
        </ol>
        
        <div class="md:mt-14 mt-8" v-if="tab.showButton !== false">
          <shared-button
            class="sm:w-auto w-full py-4 px-8 rounded-4xl font-medium text-white flex items-center justify-center gap-2 button_shadow group"
            variant="green"
            @click="callbackModalStore.open"
          >
            {{ tab.buttonText || 'Заказать консультацию' }} <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
          </shared-button>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script lang="ts" setup>
  interface TabItem {
    title?: string;
    description: string;
  }
  
  interface Tab {
    id: string;
    title: string;
    description: string;
    subDescription?: string;
    processTitle?: string;
    items?: TabItem[];
    showButton?: boolean;
    buttonText?: string;
  }
  
  const callbackModalStore = useCallbackModalStore();
  
  const props = defineProps<{
    tabs: Tab[];
  }>();
  
  const activeTab = ref(props.tabs[0]?.id || '');
  
  const setActiveTab = (tabId: string) => {
    activeTab.value = tabId;
  };
  </script>
