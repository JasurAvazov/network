<!-- <template>
    <div>
      <form @submit.prevent="updateDoc">
        <input v-model="name" type="text" placeholder="Name">
        <input v-model="description" type="text" placeholder="Description">
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api';
  import { readDocument, updateDocument } from '~/services/myCollection';
  
  export default defineComponent({
    async asyncData({ params }) {
      const document = await readDocument(params.id);
      return { document };
    },
    data() {
      return {
        name: '',
        description: ''
      };
    },
    mounted() {
      this.name = this.document.name;
      this.description = this.document.description;
    },
    methods: {
      async updateDoc() {
        const data = {
          name: this.name,
          description: this.description
        };
        await updateDocument(this.document.id, data);
        this.$router.push(`/documents/${this.document.id}`);
      }
    }
  });
  </script> -->