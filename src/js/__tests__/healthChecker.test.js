import sortUnits from '../healthChecker';

 
test('tobe execution', () => {
    const input1 = [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ];
    const input2 = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    
    const result = sortUnits(input1);

    
    expect(result).not.toBe(input2); 
});


test('toEqual execution', () => {
    const input1 = [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ];
    const input2  = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    
    const result = sortUnits(input1);

    expect(result).toEqual(input2); 
});
