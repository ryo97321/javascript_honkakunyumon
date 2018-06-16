scope = 'Global Variable';

function getValue() {
  scope = 'Local variable';
  return scope;
}

console.log(getValue());
console.log(scope);