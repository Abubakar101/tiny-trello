export default function() {
  this.namespace = '/api';

  this.get('/lists');
  this.post('/lists');
  this.get('/lists/:id');
  this.put('/lists/:id');
  this.patch('/items/:id');
  this.del('/lists/:id');

  this.get('/items');
  this.post('/items');
  this.get('/items/:id');
  this.put('/items/:id');
  this.patch('/items/:id');
  this.del('/items/:id');

}
