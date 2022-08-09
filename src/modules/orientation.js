export const orientation = () => {

    const changeBackground = () => {


        if ((window.screen.width > 992) && (window.screen.width < 1950)) {


            if ((window.screen.height > (window.screen.width * 0.95)) || (window.screen.height < (window.screen.width / 2))) {

                document.querySelector('.cover').style.backgroundSize = "cover"

            } else {
                document.querySelector('.cover').style.backgroundSize = "contain"
            }




        }

    }




    window.addEventListener("orientationchange", function () {

        changeBackground()


    }, false);

    changeBackground()

}