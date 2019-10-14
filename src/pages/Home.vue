<template>
    <div class="home">
        <Header></Header>
        <Slider></Slider>
        <List></List>
        <Sell></Sell>
        <Type></Type>
        <Empy></Empy>
        <Footer></Footer>
    </div>
</template>

<script>
    import Slider from '../components/Silder'
    import List from '../components/List'
    import Sell from '../components/Sell'
    import Type from '../components/Type'
    import Empy from '../components/Empy'
    import Header from '../components/Header'
    import Footer from '../components/Footer'

export default {
    components:{
    Slider,List,Sell,Type,Empy,Header,Footer
  },
}
</script>

<style>
    /* .home{background: #f2f2f2;min-height: calc(100vh - 42px);padding-top: 42px;} */
    /* .home .element{display: block;width: auto;max-width: 100%;border-color: #222222;border-width: 0;box-sizing: border-box;} */
</style>