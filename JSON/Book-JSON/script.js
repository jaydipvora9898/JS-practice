// DOM Elements
const booksContainer = document.getElementById('booksContainer');
const addBookBtn = document.getElementById('addBookBtn');
const bookModal = document.getElementById('bookModal');
const confirmModal = document.getElementById('confirmModal');
const bookForm = document.getElementById('bookForm');
const searchInput = document.getElementById('searchInput');
const closeBtns = document.querySelectorAll('.close-btn');
const modalTitle = document.getElementById('modalTitle');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const cancelBtn = document.getElementById('cancelBtn');
const importBtn = document.getElementById('importBtn');
const exportBtn = document.getElementById('exportBtn');
const fileInput = document.getElementById('fileInput');

// Form fields
const bookIdField = document.getElementById('bookId');
const titleField = document.getElementById('title');
const authorField = document.getElementById('author');
const yearField = document.getElementById('year');
const genreField = document.getElementById('genre');
const descriptionField = document.getElementById('description');
const coverUrlField = document.getElementById('coverUrl');

// Current book to delete
let currentBookToDelete = null;
const SESSION_STORAGE_KEY = 'bookManagerData';

// Initialize the app
function init() {
    loadBooks();
    setupEventListeners();
}

// Load books from sessionStorage
function loadBooks() {
    const storedBooks = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            genre: "Classic",
            description: "A story of wealth, love, and the American Dream in the 1920s.",
            coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            genre: "Fiction",
            description: "A powerful story of racial injustice and moral growth in the American South.",
            coverUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            year: 1949,
            genre: "Dystopian",
            description: "A chilling portrayal of a totalitarian regime and government surveillance.",
            coverUrl: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ];
}

// Save books to sessionStorage
function saveBooksToStorage(books) {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(books));
}

// Get current books
function getBooks() {
    return loadBooks();
}

// Set books
function setBooks(newBooks) {
    saveBooksToStorage(newBooks);
    renderBooks();
}

// Render all books
function renderBooks(filteredBooks = null) {
    const books = getBooks();
    const booksToRender = filteredBooks || books;
    
    if (booksToRender.length === 0) {
        booksContainer.innerHTML = `
            <div class="no-books">
                <i class="fas fa-book-open"></i>
                <h3>No books found</h3>
                <p>Add a new book to get started</p>
            </div>
        `;
        return;
    }
    
    booksContainer.innerHTML = booksToRender.map(book => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-cover" style="background-image: url('${book.coverUrl || 'https://via.placeholder.com/300x200?text=No+Cover'}')"></div>
            <div class="book-details">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <div class="book-meta">
                    <span class="book-year"><i class="far fa-calendar-alt"></i> ${book.year}</span>
                    <span class="book-genre"><i class="fas fa-tag"></i> ${book.genre}</span>
                </div>
                <p class="book-description">${book.description}</p>
                <div class="book-actions">
                    <button class="btn btn-primary view-btn" data-id="${book.id}">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="btn btn-secondary edit-btn" data-id="${book.id}">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-danger delete-btn" data-id="${book.id}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Add book button
    addBookBtn.addEventListener('click', () => {
        openAddBookModal();
    });
    
    // Search input
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const books = getBooks();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );
        renderBooks(filteredBooks);
    });
    
    // Book form submit
    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveBook();
    });
    
    // Cancel button
    cancelBtn.addEventListener('click', () => {
        bookModal.style.display = 'none';
    });
    
    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            bookModal.style.display = 'none';
            confirmModal.style.display = 'none';
        });
    });
    
    // Confirm delete
    confirmDeleteBtn.addEventListener('click', () => {
        if (currentBookToDelete) {
            deleteBook(currentBookToDelete);
            currentBookToDelete = null;
            confirmModal.style.display = 'none';
            showToast('Book deleted successfully');
        }
    });
    
    // Cancel delete
    cancelDeleteBtn.addEventListener('click', () => {
        currentBookToDelete = null;
        confirmModal.style.display = 'none';
    });
    
    // Click outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target === bookModal) {
            bookModal.style.display = 'none';
        }
        if (e.target === confirmModal) {
            confirmModal.style.display = 'none';
        }
    });
    
    // Import books
    importBtn.addEventListener('click', () => {
        fileInput.click();
    });
    
    // Export books
    exportBtn.addEventListener('click', () => {
        exportBooks();
    });
    
    // Handle file import
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedBooks = JSON.parse(event.target.result);
                if (Array.isArray(importedBooks) && importedBooks.length > 0) {
                    // Validate imported books
                    const isValid = importedBooks.every(book => 
                        book.title && book.author && book.year && book.genre
                    );
                    
                    if (isValid) {
                        // Merge with existing books, avoiding duplicates
                        const existingBooks = getBooks();
                        const newBooks = [...existingBooks];
                        
                        importedBooks.forEach(importedBook => {
                            if (!existingBooks.some(b => b.id === importedBook.id)) {
                                newBooks.push(importedBook);
                            }
                        });
                        
                        setBooks(newBooks);
                        showToast(`${importedBooks.length} books imported successfully`);
                    } else {
                        showToast('Invalid book data format', 'error');
                    }
                } else {
                    showToast('No valid books found in the file', 'error');
                }
            } catch (error) {
                showToast('Error parsing JSON file', 'error');
                console.error('Error parsing JSON file:', error);
            }
            fileInput.value = '';
        };
        reader.readAsText(file);
    });
    
    // Event delegation for dynamic buttons
    booksContainer.addEventListener('click', (e) => {
        // View button
        if (e.target.classList.contains('view-btn') || e.target.closest('.view-btn')) {
            const btn = e.target.classList.contains('view-btn') ? e.target : e.target.closest('.view-btn');
            const id = parseInt(btn.getAttribute('data-id'));
            viewBook(id);
        }
        
        // Edit button
        if (e.target.classList.contains('edit-btn') || e.target.closest('.edit-btn')) {
            const btn = e.target.classList.contains('edit-btn') ? e.target : e.target.closest('.edit-btn');
            const id = parseInt(btn.getAttribute('data-id'));
            openEditBookModal(id);
        }
        
        // Delete button
        if (e.target.classList.contains('delete-btn') || e.target.closest('.delete-btn')) {
            const btn = e.target.classList.contains('delete-btn') ? e.target : e.target.closest('.delete-btn');
            const id = parseInt(btn.getAttribute('data-id'));
            openDeleteConfirmation(id);
        }
    });
}

// Open add book modal
function openAddBookModal() {
    bookForm.reset();
    bookIdField.value = '';
    modalTitle.textContent = 'Add New Book';
    bookModal.style.display = 'flex';
    titleField.focus();
}

// Open edit book modal
function openEditBookModal(id) {
    const books = getBooks();
    const book = books.find(book => book.id === id);
    if (book) {
        bookIdField.value = book.id;
        titleField.value = book.title;
        authorField.value = book.author;
        yearField.value = book.year;
        genreField.value = book.genre;
        descriptionField.value = book.description;
        coverUrlField.value = book.coverUrl || '';
        
        modalTitle.textContent = 'Edit Book';
        bookModal.style.display = 'flex';
        titleField.focus();
    }
}

// View book details
function viewBook(id) {
    const books = getBooks();
    const book = books.find(book => book.id === id);
    if (book) {
        alert(`Title: ${book.title}\nAuthor: ${book.author}\nYear: ${book.year}\nGenre: ${book.genre}\n\nDescription: ${book.description}`);
    }
}

// Open delete confirmation
function openDeleteConfirmation(id) {
    currentBookToDelete = id;
    confirmModal.style.display = 'flex';
}

// Save book (add or update)
function saveBook() {
    const id = bookIdField.value ? parseInt(bookIdField.value) : null;
    const title = titleField.value.trim();
    const author = authorField.value.trim();
    const year = parseInt(yearField.value);
    const genre = genreField.value.trim();
    const description = descriptionField.value.trim();
    const coverUrl = coverUrlField.value.trim();
    
    if (!title || !author || !genre || isNaN(year)) {
        showToast('Please fill all required fields', 'error');
        return;
    }
    
    const books = getBooks();
    
    if (id) {
        // Update existing book
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) {
            books[index] = {
                id,
                title,
                author,
                year,
                genre,
                description,
                coverUrl: coverUrl || null
            };
            setBooks(books);
            showToast('Book updated successfully');
        }
    } else {
        // Add new book
        const newId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
        books.push({
            id: newId,
            title,
            author,
            year,
            genre,
            description,
            coverUrl: coverUrl || null
        });
        setBooks(books);
        showToast('Book added successfully');
    }
    
    bookModal.style.display = 'none';
}

// Delete book
function deleteBook(id) {
    const books = getBooks();
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
}

// Export books to JSON file
function exportBooks() {
    const books = getBooks();
    if (books.length === 0) {
        showToast('No books to export', 'error');
        return;
    }
    
    const dataStr = JSON.stringify(books, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `books-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showToast(`${books.length} books exported`);
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'error' : ''}`;
    toast.innerHTML = `
        <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);