import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  onInputChange = ({ currentTarget }) => {
    const name = currentTarget.name;
    const value = currentTarget.value;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;

    this.props.onSubmit({ name, number, id: uuidv4() });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.onFormSubmit}>
        <label className={s.form__label}>
          Name
          <input
            className={s.form__input}
            onChange={this.onInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
          />
          <label className={s.form__label}>
            Number
            <input
              className={s.form__input}
              onChange={this.onInputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
            />
          </label>
        </label>
        <button className={s.form__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;