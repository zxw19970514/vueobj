<template>
    <div class="list element">
        <div class="container">
            <div class="row">
                <div class="element typ">
                    <div class="element picture">
                        <a href=""><img src="images/list1.png" alt=""></a>
                    </div>
                    <div class="element text">
                        <a href=""><div>戒指</div></a>
                    </div>
                </div>
                <div class="element typ">
                    <div class="element picture">
                        <a href=""><img src="images/list2.png" alt=""></a>
                    </div>
                    <div class="element text">
                        <a href=""><div>耳饰</div></a>
                    </div>
                </div>
                <div class="element typ">
                    <div class="element picture">
                        <a href=""><img src="images/list3.png" alt=""></a>
                    </div>
                    <div class="element text">
                        <a href=""><div>手链</div></a>
                    </div>
                </div>
                <div class="element typ">
                    <div class="element picture">
                        <a href=""><img src="images/list4.png" alt=""></a>
                    </div>
                    <div class="element text">
                        <a href=""><div>项链</div></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.element {
    display: block;
    width: auto;
    max-width: 100%;
    border-color: #222222;
    border-width: 0;
    box-sizing: border-box;
}
.container {
    position: relative;
    margin: 0 auto;
    background-color: #ffffff;
    margin-bottom: 6px;
    padding-top: 20px;
    padding-bottom: 20px;
}
.row::before, .row::after {
    content: " ";
    display: table;
}
.typ{width: 25%;
display: inline-block;
float: left;
position: relative;}
.picture {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
.picture img{
    width: 45px;
    height: 45px;
    margin: 0 auto;
}
.text {
    max-width: 100%;
    min-height: 10px;
    line-height: 1.4em;
    white-space: pre-wrap;
    word-break: break-all;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    text-align: center;
}
.element > a {
    display: block;
    width: 100%;
    height: 100%;
}
</style>