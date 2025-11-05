<template>
<!-- <header class="header">
        <div class="container">
            <nav class="nav">
                <div class="logo">
                    <a href="/">
                        <span class="logo-icon">🐾</span>
                        <span class="logo-text">Pet Rescue</span>
                    </a>
                </div>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/articles">Articles</a></li>
                    <li><a href="/adoption">Adoption</a></li>
                    <li><a href="/community">Community</a></li>
                    <li><a href="/donation">Donate</a></li>
                    <li><a href="/signup" class="btn-nav">Login</a></li>
                </ul>
            </nav>
        </div>
    </header> -->

    <main>
        <section class="page-header">
            <div class="container">
                <h1>Become a Foster Home</h1>
                <p>Provide temporary care and love while pets await their forever homes</p>
            </div>
        </section>

        <section class="foster-intro">
            <div class="container">
                <div class="foster-content">
                    <div class="foster-info">
                        <h2>Why Foster?</h2>
                        <p>Fostering saves lives by creating space in shelters for more animals in need. You'll provide a temporary home, giving pets the love and care they deserve while we find them permanent families.</p>
                        <ul class="foster-benefits">
                            <li>✓ Experience pet ownership before adopting</li>
                            <li>✓ Make a direct impact on animal welfare</li>
                            <li>✓ Receive support and supplies from us</li>
                            <li>✓ Flexible commitment periods</li>
                            <li>✓ Join a community of caring fosters</li>
                        </ul>
                    </div>
                    <div class="foster-image">
                        <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Foster pet">
                    </div>
                </div>
            </div>
        </section>

        <section class="form-section">
            <div class="container">
                <div class="form-container">
                    <h2>Foster Home Application</h2>
                    <form class="foster-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="full-name">Full Name</label>
                                <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required>
                            </div>

                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="Your email address" required>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="Your contact number" required>
                            </div>

                            <div class="form-group">
                                <label for="age">Age</label>
                                <input type="number" id="age" name="age" placeholder="Your age" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="address">Home Address</label>
                            <textarea id="address" name="address" rows="3" placeholder="Enter your full address" required></textarea>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="housing">Housing Type</label>
                                <select id="housing" name="housing" required>
                                    <option value="">Select housing type</option>
                                    <option value="house">House</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="condo">Condo</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="pet-capacity">Pet Capacity</label>
                                <select id="pet-capacity" name="pet-capacity" required>
                                    <option value="">How many pets can you foster?</option>
                                    <option value="1">1 pet</option>
                                    <option value="2">2 pets</option>
                                    <option value="3">3 pets</option>
                                    <option value="4+">4 or more pets</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Preferred Animal Type</label>
                            <div class="checkbox-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" name="animal-type" value="dogs">
                                    <span>Dogs</span>
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" name="animal-type" value="cats">
                                    <span>Cats</span>
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" name="animal-type" value="rabbits">
                                    <span>Rabbits</span>
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" name="animal-type" value="birds">
                                    <span>Birds</span>
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="experience">Previous Pet Experience</label>
                            <textarea id="experience" name="experience" rows="4" placeholder="Tell us about your experience with pets..." required></textarea>
                        </div>

                        <div class="form-group">
                            <label for="availability">Availability</label>
                            <select id="availability" name="availability" required>
                                <option value="">Select availability</option>
                                <option value="short">Short-term (1-4 weeks)</option>
                                <option value="medium">Medium-term (1-3 months)</option>
                                <option value="long">Long-term (3+ months)</option>
                                <option value="flexible">Flexible</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="notes">Additional Notes</label>
                            <textarea id="notes" name="notes" rows="4" placeholder="Any special considerations, preferences, or questions?"></textarea>
                        </div>

                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" name="home-visit" required>
                                <span>I agree to a home visit for foster approval</span>
                            </label>
                        </div>

                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">Submit Application</button>
                            <button type="reset" class="btn btn-secondary">Clear Form</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Pet Rescue</h3>
                    <p>We are dedicated to rescuing, rehabilitating, and rehoming animals in need. Every life matters, and together we can make a difference.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="/adoption">Adoption</a></li>
                        <li><a href="/foster">Foster Home</a></li>
                        <li><a href="/report">Report Animal</a></li>
                        <li><a href="/articles">Articles</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <ul class="footer-contact">
                        <li>📧 info@petrescue.org</li>
                        <li>📞 +1 (555) 123-4567</li>
                        <li>📍 123 Rescue Street, City, State</li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#" class="social-link">Facebook</a>
                        <a href="#" class="social-link">Instagram</a>
                        <a href="#" class="social-link">Twitter</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Pet Rescue. All rights reserved. Made with 💚 for animals in need.</p>
            </div>
        </div>
    </footer> -->
</template>

<script>
export default { name: 'FosterView' }
</script>

<style scoped>
</style>
