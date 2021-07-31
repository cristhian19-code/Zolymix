<template>
<splide :options="options">
    <splide-slide>
        <img src="../assets/217024453_122491610083537_7113564926912702258_n.jpg" height="100%">
    </splide-slide>
    <splide-slide>
        <img src="../assets/217024453_122491610083537_7113564926912702258_n.jpg" height="100%">
    </splide-slide>
    <splide-slide>
        <img  src="../assets/217024453_122491610083537_7113564926912702258_n.jpg" height="100%">
    </splide-slide>
</splide>
</template>

<script>
export default {
    data() {
        return {
            options: {
                type: 'loop',
		        width: '100%',
				pagination: false,
                perPage: 1,
                autoplay:true,
                interval: 4000
            },
        };
    },
}
</script>

<style>
img{
    height: 600px;
}
.splide__slide{
    display: flex;
    justify-content: center;
}

.splide__arrow svg{
    fill: #FE8A2A;
}

.splide__arrow svg:hover{
    fill: #FE8A2A;
}
</style>