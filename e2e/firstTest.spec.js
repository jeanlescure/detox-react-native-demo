describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should allow user to sign up', async () => {
    await expect(element(by.id('signUpButton'))).toBeVisible();
    await element(by.id('signUpButton')).tap();

    // Type the Email
    await element(by.type('RCTTextField')).atIndex(4).typeText('test@example.com');
    // Type the Password
    await element(by.type('RCTTextField')).atIndex(3).typeText('test1234');
    // Type the Password confirmation
    await element(by.type('RCTTextField')).atIndex(2).typeText('test1234');
    // Type the First name
    await element(by.type('RCTTextField')).atIndex(1).typeText('Zaphod');

    // The following makes sure that the Last name field is visible
    // otherwise the keyboard occludes it and Detox fails the test
    await element(by.text('Email')).tap();
    await element(by.type('RCTTextField')).atIndex(0).tap();

    // Type the Last name
    await element(by.type('RCTTextField')).atIndex(0).typeText('Beeblebrox');

    // Again, the keyboard occludes the Sign Up button
    // The following hides the keyboard
    await element(by.text('Email')).tap();

    // Now tap the Sign Up button
    await element(by.text('Sign Up')).atIndex(1).tap();

    await expect(element(by.text('Coming Soon'))).toBeVisible();
  });
});