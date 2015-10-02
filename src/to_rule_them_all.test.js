'use strict';

describe('to_rule_them_all', function() {

    describe('setup environment', function() {

        it('should have jquery defined', function() {
            expect($).toBeDefined();
        });

        it('should be able to fetch a div class.', function() {
            $('body').html("<div class='test' />");
            expect($('.test').length).toBe(1);
        });

        it('rule function should return true', function() {
            var test = $('.test');
            expect(test.rule()).toBe(test);
        });
        
    });
});
