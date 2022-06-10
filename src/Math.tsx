import { ChangeEvent, Component} from 'react';
import './Math.css';

interface MathProps {
  decimal?: number;
};

interface MathState {
  first: string;
  second: string;
  operator: string;
  result: number;
};

export default class Math extends Component<MathProps, MathState> {

  state = {
    first: "0",
    second: "0",
    operator: "+",
    result: 0,
  };

  updateFirst = (evt: ChangeEvent<HTMLInputElement>) => this.setState({first: evt.target.value});
  updateSecond = (evt: ChangeEvent<HTMLInputElement>) => this.setState({second: evt.target.value});
  updateOperator = (evt: ChangeEvent<HTMLSelectElement>) => this.setState({operator: evt.target.value});
  updateResult = () => {
    switch (String(this.state.operator)) {
      case "+":
        this.setState( {result: parseFloat(this.state.first) + parseFloat(this.state.second)});  
        break;
      case "-":
        this.setState( {result: parseFloat(this.state.first) - parseFloat(this.state.second)});  
        break;
      case "*":
        this.setState( {result: parseFloat(this.state.first) * parseFloat(this.state.second)});  
        break;
      default:
        //"/" (division)
        this.setState( {result: parseFloat(this.state.first) / parseFloat(this.state.second)});  
        break;
    }
  }
  handleResultChange = () => this.setState({result: this.state.result}, this.updateResult);

  public render(): JSX.Element {
    return (
      <div
        className='math'
        onChange={this.handleResultChange}
      >
        <input
          className='number first'
          value={this.state.first}
          onChange={this.updateFirst}
        />

        <select
          className='operator'
          onChange={this.updateOperator}
        >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
        </select>

        <input
          className='number second'
          value={this.state.second}
          onChange={this.updateSecond}
        />

        <span
          className='result'
        >
          {/* If it's an integer, print the result, if it's not, fix the float to the given decimal*/}
        = {this.state.result % 1 === 0 ? this.state.result : this.state.result.toFixed(this.props.decimal || 2)}
        </span>
      </div>
    );
  }
}