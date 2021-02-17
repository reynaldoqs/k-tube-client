/*it(`should handle previous operation when new operation pressed`, () => {
    const result = target(
        {
            value: '10',

            previousValue: '12',

            operation: '-',
        },
        keyPressed('+'),
    );

    expect(result.previousValue).toEqual(undefined);
    expect(result.value).toEqual('2');

    expect(result.operation).toEqual('+');
});

it(`should replace op when op present but no previous value`, () => {
    const result = target(
        {
            value: '10',

            previousValue: undefined,

            operation: '-',
        },
        keyPressed('+'),
    );

    expect(result.previousValue).toEqual(undefined);

    expect(result.value).toEqual('10');

    expect(result.operation).toEqual('+');
});
*/
export const a = 12;
