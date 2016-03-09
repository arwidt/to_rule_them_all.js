'use strict';

describe('to_rule_them_all', function() {

    describe('setup environment', function() {

        it('should have jquery defined', function() {
            expect($).toBeDefined();
        });

        it('should setup a div element on stage to use later', function() {
            $('body').append("<div class='test' />");
            var el = $('.test');
            el.width = 100;
            el.height = 100;

            el.css('margin-left', '50%');
            el.css('margin-top', '50%');

            expect(el.length).toBe(1);
            expect(el.width).toBe(100);
            expect(el.height).toBe(100);
        });

        it('should be able to fetch a div class.', function() {
            expect($('.test').length).toBe(1);
        });

        describe('utils function', function() {

            it('getType should return px when given a number', function() {
                expect(window.utils.getType(10)).toBe("px");
            });

            it('getType should return px when given px string', function() {
                expect(window.utils.getType("25px")).toBe('px');
            });

            it('getType should return % when given percent string', function() {
                expect(window.utils.getType("55%")).toBe("%");
            });

            it ('calcPercentOf should return correct values', function() {

                expect(window.utils.calcPercentOf("123", 100)).toBe(null);

                expect(window.utils.calcPercentOf("50%", 200)).toBe(100);
                expect(window.utils.calcPercentOf("20%", 200)).toBe(40);
                expect(window.utils.calcPercentOf("73.6154%", 1337)).toBe(984.237898);

            })

        });

        describe('creating rulers', function() {

            it('should create a ruler div when a ruler is set.', function() {
                $('.test').rule();
                expect($(".rulers").length).toBe(1);
            });

            it('ruler div should have child rulers', function() {
                // expect($(".rulers").children.length).toBe(1);
            });

        });



        // it('rule function should return a jquery object', function() {
        //     var test = $('.test');
        //     expect(test.rule()).toBe(test);
        // });

    });
});
