'use strict';

describe('to_rule_them_all', function() {

    describe('running a test to testing', function() {

        it('should not fail a trivial test', function() {
            expect($).toBeDefined();
        });

        it('should have a rule function', function() {
            expect($().rule()).toBeDefined();
        });

        it('should have a test function', function() {
            expect($().rule().test("asdf")).toBe($('.test'));
        });



    });
});
