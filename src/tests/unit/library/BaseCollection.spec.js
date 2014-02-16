define(function(require) {
    'use strict';

    var BaseCollection = require('app/library/BaseCollection');
    var BaseModel = require('app/library/BaseModel');

    var TEST_LENGTH = 2;
    var TEST_ID_1 = 1;
    var TEST_ID_2 = 5;

    function setupBaseCollection() {
        return new BaseCollection([{id: TEST_ID_1}, {id: TEST_ID_2}]);
    }

    describe('BaseCollection', function() {

        describe('instantiation', function() {
            it('has length 0 when passed 0 arguments', function (){
                var baseCollection = new BaseCollection();
                expect(baseCollection.length).toEqual(0);
            });

            it('auto-fills from an array of json data', function() {
                var arrData = [{id: 0}, {id: 1}];
                var baseCollection = new BaseCollection(arrData);

                expect(baseCollection.length).toEqual(TEST_LENGTH);
                var testModel = baseCollection.get(0);
                expect(testModel instanceof BaseModel).toBeTruthy();
            });

            it('auto-fills from an array of model instances', function() {
                var arrData = [new BaseModel({id: 0}), new BaseModel({id: 1})];
                var baseCollection = new BaseCollection(arrData);

                expect(baseCollection.length).toEqual(TEST_LENGTH);
                var testModel = baseCollection.get(0);
                expect(arrData[0] === testModel).toBeTruthy();
            });
        });

        describe('#toJSON', function() {
            it('returns an array of the same length', function() {
                var baseCollection = setupBaseCollection();
                var arrJSON = baseCollection.toJSON();

                expect(arrJSON instanceof Array).toBeTruthy();
                expect(arrJSON.length).toEqual(2);
            });
        });

        describe('#copy- no arguments', function() {
            it('creates a full copy when called with no arguments', function() {
                var baseCollection = setupBaseCollection();
                var copy = baseCollection.copy();

                expect(copy.length).toEqual(TEST_LENGTH);
                expect(copy.get(TEST_ID_1) === baseCollection.get(TEST_ID_1)).toBeTruthy();
            });
        });

        describe('#copy- select models', function() {
            it ('returns a copy with only selected models that are passed in an array', function() {
                var baseCollection = setupBaseCollection();
                var copiedCollection = baseCollection.copy(
                    [baseCollection.get(TEST_ID_2)]
                );

                expect(copiedCollection.length).toEqual(1);
                expect(copiedCollection.get(TEST_ID_2) === baseCollection.get(TEST_ID_2)).toBeTruthy();
            });
        });

        describe('#add', function() {
            var baseCollection = setupBaseCollection();
            baseCollection.add({id: 3});

            it('adds the model and increments the length property', function() {
                expect(baseCollection.length).toEqual(3);
                expect(baseCollection._models.length).toEqual(3);
            });

            it('creates the model as an instance of the base class if passed as JSON', function() {
                expect(baseCollection.get(3) instanceof BaseModel).toBeTruthy();
            });
        });

        describe('#remove- by id', function() {
            var baseCollection = setupBaseCollection();
            baseCollection.remove(TEST_ID_1);

            it('removes the model and decrements the length property', function() {
                expect(baseCollection.length).toEqual(TEST_LENGTH - 1);
                expect(baseCollection._models.length).toEqual(TEST_LENGTH -1);
            });
        });

        describe('#remove- by model reference', function() {
            var baseCollection = setupBaseCollection();
            baseCollection.remove(baseCollection.get(TEST_ID_1));

            it('removes the model and decrements the length property', function() {
                expect(baseCollection.length).toEqual(TEST_LENGTH - 1);
                expect(baseCollection._models.length).toEqual(TEST_LENGTH -1);
            });
        });


        describe('#empty', function() {
            var baseCollection = setupBaseCollection();
            baseCollection.empty();

            it('removes all models and sets length to 0', function(){
                expect(baseCollection.length).toEqual(0);
                expect(baseCollection._models.length).toEqual(0);
            });
        });

        describe('#sort', function() {
            var baseCollection = setupBaseCollection();
            baseCollection.add({id: 3});
            baseCollection.sort(function(modelA, modelB) {
                return modelA.id > modelB.id ? 1 : -1;
            });

            it('applies browser default sorting', function() {
                expect(baseCollection._models[0].id).toEqual(TEST_ID_1);
                expect(baseCollection._models[2].id).toEqual(TEST_ID_2);
            });
        });

        describe('#sortBy', function() {
            var baseCollection = setupBaseCollection();

            it('sorts descending by key when second argument is true', function() {
                baseCollection.sortBy('id', true);
                expect(baseCollection._models[0].id).toEqual(TEST_ID_2);
            });

            it('sorts ascending by key when second argument is falsy', function() {
                baseCollection.sortBy('id');
                expect(baseCollection._models[0].id).toEqual(TEST_ID_1);
            });
        });

        describe('#sortByType - alphabetical string (delegates to #sortByString)', function() {
            var baseCollection = new BaseCollection([
                {id: 3, a: 'zzzz'},
                {id: TEST_ID_1, a: 'a1'},
                {id: TEST_ID_2, a: 'A2'},
            ]);

            it('sorts alphabetically when passed SORT.TYPE.STRING', function() {
                baseCollection.sortByType('a', false, BaseCollection.SORT.TYPE.STRING);
                // normal ascii sorting would put 'A2' first, but string sorting is set to alphabetical
                expect(baseCollection._models[0].a).toEqual('a1');
            });
        });

        describe('#sortByType - array length (delegates to #sortByCount)', function() {
            var baseCollection = new BaseCollection([
                {id: 3, a: ['length 1']},
                {id: TEST_ID_1, a: []},
                {id: TEST_ID_2, a: ['length 2', 'lenth 2']},
            ]);

            it('sorts by array length descending', function() {
                baseCollection.sortByType('a', false, BaseCollection.SORT.TYPE.ARRAY_LENGTH);
                expect(baseCollection._models[0].id).toEqual(TEST_ID_1);
            });

            it('sorts by array length ascending', function() {
                baseCollection.sortByType('a', true, BaseCollection.SORT.TYPE.ARRAY_LENGTH);
                expect(baseCollection._models[0].id).toEqual(TEST_ID_2);
            });
        });

        describe('#get', function() {
            var baseCollection = setupBaseCollection();
            var model = baseCollection.get(TEST_ID_2);

            it('returns the model by the specified ID', function() {
                expect(model.id).toEqual(TEST_ID_2);
            });
        });

        describe('#getPage', function() {
            var baseCollection = setupBaseCollection();

            var page1perPage1 = baseCollection.getPage(1, 1);
            var page2perPage1 = baseCollection.getPage(2, 1);
            var page1perPage2 = baseCollection.getPage(1, 2);

            it('returns only the first item when passed page 1, perPage 1', function() {
                expect(page1perPage1.length).toEqual(1);
                expect(page1perPage1[0].id).toEqual(TEST_ID_1);
            });

            it('returns only the second item when passed page 2, perPage 1', function() {
                expect(page2perPage1.length).toEqual(1);
                expect(page2perPage1[0].id).toEqual(TEST_ID_2);
            });

            it('returns the first two items when passed page 1, perPage 2', function() {
                expect(page1perPage2.length).toEqual(2);
            });
        });

        describe('#contains', function() {
            var baseCollection = setupBaseCollection();
            it('returns true only if a model with the same id property is in the collection', function() {
                expect(baseCollection.contains(TEST_ID_2)).toBeTruthy();
                expect(baseCollection.contains(10)).toBeFalsy();
            });
        });
    });
});
