import { Route, Routes } from 'react-router';
import Appbar from './components/AppBar/AppBar';
import OldSignupForm from './components/SignupForm/SignupForm';
import OldColorPicker from './components/ColorPicker/ColorPicker';
import OldCounter from './components/Counter/Counter';
import OldClock from './components/Clock/Clock';
import PokemonView from './views/PokemonView';
import SkipEffectOnFirstRender from './components/SkipEffectOnFirstRender';
import Friends from './components/Friends';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      <Appbar />

      <Routes>
        <Route path="/signup" element={<OldSignupForm />}></Route>
        <Route
          path="/colorpicker"
          element={<OldColorPicker options={colorPickerOptions} />}
        ></Route>
        <Route path="/counter" element={<OldCounter />}></Route>
        <Route path="/clock" element={<OldClock />}></Route>
        <Route path="/pokemon" element={<PokemonView />}></Route>
        <Route path="/skip-first-render" element={<SkipEffectOnFirstRender />}></Route>
        <Route path="/notes" element={<Friends />}></Route>
      </Routes>
    </div>
  );
}
