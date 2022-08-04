 <template>
  <div>
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer> 
  </div>
</template>

<script>
import Header from './Header/Header.vue'
import Footer from './Footer/Footer.vue'
export default {
    name: "layout",
    components: { Header, Footer }
}
</script>
<style>
</style>