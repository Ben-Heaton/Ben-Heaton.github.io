$(document).ready(function () {

    /* ---- Portfolio Page ----------------------------------------------------------------------------------------- */
    const $wec = $('.work_example_container');

    const $js_button = $('#js_button');
    const $javascript_wec = $('#javascript_work_example_container');

    const $jq_button = $('#jq_button');
    const $jquery_wec = $('#jQuery_work_example_container');

    const $python_button = $('#python_button');
    const $python_wec = $('#python_work_example_container');

    const $csharp_button = $('#csharp_button');
    const $csharp_wec = $('#csharp_work_example_container');

    const $java_button = $('#java_button');
    const $java_wec = $('#java_work_example_container');

    // Have work example containers 'closed' on load.
    $wec.ready().hide();

    // Toggle/Slide work example container.
    $js_button.on('click', () => {
        $javascript_wec.stop(true, true).slideToggle('slow');
    });

    $jq_button.on('click', () => {
        $jquery_wec.stop(true, true).slideToggle('slow');
    });

    $python_button.on('click', () => {
        $python_wec.stop(true, true).slideToggle('slow');
    });

    $csharp_button.on('click', () => {
        $csharp_wec.stop(true, true).slideToggle('slow');
    });

    $java_button.on('click', () => {
        $java_wec.stop(true, true).slideToggle('slow');
    });


    /* ---- Just in case code for buttons ----------------------------------------------------------------------------------------- */
    /* function show_hide_javascript_work_example_container() {
        let container = document.getElementById("javascript_work_example_container");

        if (container.style.display === "none") {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    }

    function show_hide_jQuery_work_example_container(){
        let container = document.getElementById("jQuery_work_example_container");

        if (container.style.display === "none") {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    }

    function show_hide_python_work_example_container() {
        let container = document.getElementById("python_work_example_container");

        if (container.style.display === "none") {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    }

    function show_hide_csharp_work_example_container() {
        let container = document.getElementById("csharp_work_example_container");

        if (container.style.display === "none") {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    }

    function show_hide_java_work_example_container() {
        let container = document.getElementById("java_work_example_container");

        if (container.style.display === "none") {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    } */

}); // End of .ready