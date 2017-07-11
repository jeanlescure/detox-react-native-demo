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

    // Make sure the call to create the user actually succeeded and log out
    await expect(element(by.id('logoutButton'))).toBeVisible();
    await element(by.id('logoutButton')).tap();
    await expect(element(by.id('signUpButton'))).toBeVisible();
  });

  it('should allow user to log in', async () => {
    await expect(element(by.id('loginButton'))).toBeVisible();
    await element(by.id('loginButton')).tap();

    await element(by.type('RCTTextField')).atIndex(1).tap();

    // Type the Email
    await element(by.type('RCTTextField')).atIndex(1).typeText('test@example.com');
    // Type the Password
    await element(by.type('RCTTextField')).atIndex(0).typeText('test1234');

    // The keyboard occludes the Login button
    // The following hides the keyboard
    await element(by.text('Email')).tap();

    // Now tap the Login button and make user user successfully logged in
    await element(by.text('Login')).atIndex(2).tap();
    await expect(element(by.id('logoutButton'))).toBeVisible();
  });

  it('should show recipes', async () => {
    // Make sure at least one card is loaded.
    await expect(element(by.text('This is an Article'))).toBeVisible();
  });

  it('should let user browse and open recipes', async () => {
    // Swipe left on the lunch recipes list view
    await element(by.id('listingView1')).swipe('left', 'fast');

    // Make sure at least one dinner recipe card is visible
    await expect(element(by.text('Dummy text of the printing'))).toBeVisible();

    // Scroll down
    await element(by.id('listingView2')).scroll(200, 'down');

    // Make sure next dinner recipe card is visible
    await expect(element(by.text('Standard dummy text ever'))).toBeVisible();

    // Tap the card and make sure the recipe is displayed
    await element(by.text('Standard dummy text ever')).tap();
    await expect(element(by.text('Ingredients'))).toBeVisible();
  });
});
