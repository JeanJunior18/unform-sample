const options = [
    {id: 1, title:'item1'},
    {id: 2, title:'item2'},
    {id: 3, title:'item3'},
    {id: 4, title:'item4'},
  ];

  options.forEach(i => {i['content'] = i.title})
  console.warn(options)