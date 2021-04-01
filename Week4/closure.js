function multiplier(multiplyWith) {
    function b (){
        console.log("YO EXECUTED"+multiplyWith);
    }
    b();
    return (
        function multiplyBy(x) {
            return multiplyWith * x;
        }
    );
}