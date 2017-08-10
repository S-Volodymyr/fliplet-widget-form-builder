Fliplet.FormBuilder.field('password', {
  name: 'Password input',
  category: 'Text inputs',
  props: {
    fieldType: {
      type: String,
      default: 'password'
    },
    placeholder: {
      type: String
    },
    encrypt: {
      type: Boolean,
      default: false
    }
  }
});
