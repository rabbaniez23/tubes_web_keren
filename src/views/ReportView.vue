<template>
<header class="header">
        <!-- <div class="container">
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
        </div> -->
    </header>

    <main>
        <section class="page-header">
            <div class="container">
                <h1>Report an Animal in Need</h1>
                <p>Help us save animals by reporting strays or animals requiring assistance</p>
            </div>
        </section>

        <section class="form-section">
            <div class="container">
                <div class="form-container">
                    <form class="report-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="reporter-name">Your Name</label>
                                <input type="text" id="reporter-name" name="reporter-name" placeholder="Enter your full name" required>
                            </div>

                            <div class="form-group">
                                <label for="contact">Contact Number</label>
                                <input type="tel" id="contact" name="contact" placeholder="Your phone number" required>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="location">Location</label>
                                <input type="text" id="location" name="location" placeholder="Where did you find the animal?" required>
                            </div>

                            <div class="form-group">
                                <label for="animal-type">Animal Type</label>
                                <select id="animal-type" name="animal-type" required>
                                    <option value="">Select animal type</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="bird">Bird</option>
                                    <option value="rabbit">Rabbit</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea id="description" name="description" rows="5" placeholder="Please describe the animal's condition, appearance, and situation..." required></textarea>
                        </div>

                        <div class="form-group">
                            <label for="photo">Upload Photo</label>
                            <div class="file-upload">
                                <input type="file" id="photo" name="photo" accept="image/*">
                                <label for="photo" class="file-upload-label">
                                    <span>📷 Choose Photo</span>
                                </label>
                            </div>
                            <p class="form-hint">Upload a clear photo if possible (optional)</p>
                        </div>

                        <div class="form-group">
                            <label for="urgency">Urgency Level</label>
                            <select id="urgency" name="urgency" required>
                                <option value="">Select urgency level</option>
                                <option value="low">Low - Animal seems stable</option>
                                <option value="medium">Medium - Needs attention soon</option>
                                <option value="high">High - Immediate danger or injury</option>
                            </select>
                        </div>

                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">Submit Report</button>
                            <button type="reset" class="btn btn-secondary">Clear Form</button>
                        </div>
                    </form>

                    <div class="info-box">
                        <h3>Emergency Cases</h3>
                        
                        <p>If the animal is in immediate danger or severely injured, please call our emergency hotline:</p>
                        <p class="emergency-number">📞 +1 (555) 911-PETS</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
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
    </footer>
</template>

<script>
export default { name: 'ReportView' }
</script>

<style scoped>
</style>
