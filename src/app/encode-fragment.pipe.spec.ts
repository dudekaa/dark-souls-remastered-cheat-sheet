import { EncodeFragmentPipe } from './encode-fragment.pipe';

describe('EncodeFragmentPipe', () => {
  it('create an instance', () => {
    const pipe = new EncodeFragmentPipe();
    expect(pipe).toBeTruthy();
  });

  it('can escape space', () => {
    const pipe = new EncodeFragmentPipe();
    expect(pipe.transform('aaa BBB ccc DdD')).toBe('aaa_bbb_ccc_ddd');
  });
});
