const myPlugin = (editor) => {
    var id = 'my-first-block'
    editor.BlockManager.add(id, {
        category: 'Basic predefined blocks',
        label: 'Very Simple block',
        content: '<div class="my-block">This is a simple block</div>',
      });
}

export default myPlugin;