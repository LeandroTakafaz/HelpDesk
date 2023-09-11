$(function () {
    FLUIGC.stars("#avaliacao_stars", {
        stars: 5,
        value: parseInt($("#avaliacao").val()) || 0,
        text: ['NS/NR','Insatisfeito', 'Parcialmente satisfeito', 'Satisfeito', 'Muito Satisfeito']
    }).on("click", function () {
        let index = parseInt($("#avaliacao_stars").find("i").index(this)) + 1;
        $("#avaliacao").val(index);
    });
});