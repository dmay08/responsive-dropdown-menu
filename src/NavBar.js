import './NavBar.css'
import React from 'react'
import $ from 'jquery';


class NavBar extends React.Component {
    
    componentDidMount() {

        $(document).ready(function () {
            var item_width = $('#menu_ul li').width();
            var item_count = ($("#menu_ul li").length);
            var nav_width_og = $('.menu').width();
            var nav_width = $('.menu').width();

            if ((item_width * (item_count + 1)) > nav_width) {
                $('#more').appendTo('body');
                $('#more').hide();
            }

            for (var i = 0; i < item_count; i++) {
                nav_width = $('.menu').width();
                item_width = $('#menu_ul li').width();
                item_count = ($("#menu_ul li").length);

                if (nav_width < (item_width * item_count)) {
                    $('#menu_ul li').not('#more').last().appendTo($('.overflow'));

                    $('#more').appendTo($('#menu_ul'));
                    $('#more').show();
                }
            }


            $(window).resize(function () {

                nav_width = $('.menu').width();
                item_width = $('#menu_ul li').width();
                item_count = ($("#menu_ul li").length);

                if (nav_width < (item_width * item_count)) {
                    $('#menu_ul li').not('#more').last().appendTo($('.overflow'));

                    $('#more').appendTo($('#menu_ul'));
                    $('#more').show();
                }

                if (nav_width > (item_width * item_count) + (item_width - 1)) {
                    $('.overflow li').last().appendTo($('#menu_ul'));

                    $('#more').appendTo($('#menu_ul'));
                }

                if (nav_width == nav_width_og) {
                    $('#more').appendTo('body');
                    $('#more').hide();
                }

            });

            $('#more').click(function () {
                $('.overflow').slideToggle();
            });
        });
    }

    render() {
        return (
            <div className="App">
                <div className="menu">
                    <ul id="menu_ul">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                        <li>Item 6</li>

                        <li id="more">more</li>
                    </ul>
                    <ul class="overflow"></ul>
                </div>
            </div>
        );
    }
}



export default NavBar;