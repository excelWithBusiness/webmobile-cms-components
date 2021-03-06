import 'raf/polyfill'
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Fix for packages that throw the error:
 * `matchMedia not present, legacy browsers require a polyfill`
 */
if (typeof window !== 'undefined') {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }
    }

  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    function (callback) {
      setTimeout(callback, 0)
    }
}
